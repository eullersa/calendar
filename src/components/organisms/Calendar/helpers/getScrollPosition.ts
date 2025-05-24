export const getScrollPosition = (scrollNode?: HTMLElement | Window | null) => {
  if (scrollNode instanceof Window) {
    return {
      x: scrollNode.scrollX,
      y: scrollNode.scrollY,
    };
  }

  if (!scrollNode)
    return {
      x: 0,
      y: 0,
    };

  let x = scrollNode.scrollLeft;
  let y = scrollNode.scrollTop;

  let el: HTMLElement | null = scrollNode.parentElement;
  while (el && el !== document.body) {
    x += el.scrollLeft;
    y += el.scrollTop;
    el = el.parentElement;
  }

  return { x, y };
};
