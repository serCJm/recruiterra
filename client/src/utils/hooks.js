import { useState, useRef, useEffect, useReducer } from "react";

// taken from: https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
export function useIntersectObserver({
  root = null,
  rootMargin,
  threshold = 0
} = {}) {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  function observerCb([entry]) {
    return setEntry(entry);
  }

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver(observerCb, {
        root,
        rootMargin,
        threshold
      });

      const { current: currentObserver } = observer;
      if (node) currentObserver.observe(node);
      return () => currentObserver.disconnect();
    } else {
      console.log("IntersectionObserver not supported in this browser");
    }
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
}

function animateUnmountReducer(state, action) {
  switch (action.type) {
    case "updateActiveContent":
      return { ...state, activeContent: action.activeContent };
    case "updateNewContent":
      return { ...state, newContent: action.newContent };
    default:
      throw new Error("Something went wrong with animateUnmountReducer");
  }
}

export function useAnimatedUnmount(initialContent, delayTime) {
  const [shouldAnim, setShouldAnim] = useState(false);
  const [state, dispatch] = useReducer(animateUnmountReducer, {
    activeContent: initialContent,
    newContent: initialContent
  });

  useEffect(() => {
    let timeoutId;

    if (state.activeContent !== state.newContent) {
      setShouldAnim(true);
      timeoutId = setTimeout(() => {
        dispatch({
          type: "updateActiveContent",
          activeContent: state.newContent
        });
        setShouldAnim(false);
      }, delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [shouldAnim, state.activeContent, state.newContent, delayTime]);
  return [shouldAnim, state.activeContent, dispatch];
}
