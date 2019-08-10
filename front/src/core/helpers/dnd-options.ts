const hasNative =
  // @ts-ignore
  document && (document.elementsFromPoint || document.msElementsFromPoint);

function getDropTargetElementsAtPoint(x, y, dropTargets) {
  return dropTargets.filter(t => {
    const rect = t.getBoundingClientRect();
    return (
      x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
    );
  });
}

// use custom function only if elementsFromPoint is not supported
export const backendOptions = {
  getDropTargetElementsAtPoint: !hasNative && getDropTargetElementsAtPoint
};
