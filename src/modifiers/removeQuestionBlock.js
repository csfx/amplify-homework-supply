'use strict';
import {EditorState, Modifier, SelectionState} from 'draft-js';

export function removeQuestionBlock(editorState, blockKey) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);

  var targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: block.getLength(),
  });

  var withoutEditorBlk = Modifier.removeRange(content, targetRange, 'backward');
  var resetBlock = Modifier.setBlockType(
    withoutEditorBlk,
    withoutEditorBlk.getSelectionAfter(),
    'unstyled',
  );

  var newState = EditorState.push(editorState, resetBlock, 'remove-range');
  return EditorState.forceSelection(newState, resetBlock.getSelectionAfter());
}
