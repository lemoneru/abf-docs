# Mesh Swap (Legacy)

The classic method: build a fixed mesh and swap it into the avatar on the spot. Works just like 2.x.

The "**Restore Original**" button takes you back anytime.

## When to use it

- You don't have NDMF installed
- Another tool interferes and the [non-destructive Auto Fix](/en/guide/auto-fix) doesn't work
- You want to keep the 2.x workflow
- You're combining it with Avatar Mouth Fix (→ [below](#when-combining-with-avatar-mouth-fix))

::: tip The right-click Auto Fix covers most cases
This method really swaps the mesh, so redoing expression edits means restoring first. Unless you have a specific reason, [Auto Fix (Recommended)](/en/guide/auto-fix) is easier.
:::

## Steps

1. Open the window from "**Tools**" → "**Avatar Blink Fix**"
2. Select the "**Mesh Swap (Legacy)**" tab
3. Drag & drop your avatar from the Hierarchy into **① Avatar Prefab**
4. On a supported avatar, pick it in the preset field and press "**Auto Fix**" — done
5. On an unsupported avatar, review and check "**③ BlendShapes Deforming Eyes**" and "**④ BlendShapes to Fix**", then run the fix

![The Mesh Swap tab with an avatar and face mesh set, Auto Fix button ready](/images/meshswap-window.png)

When the fix finishes, the face mesh is swapped for the fixed one. Upload as-is.

## Restoring

The window's "**Restore Original**" button brings back the original mesh.

- To redo expression edits: restore → edit → fix again, in that order
- Fix records are saved per avatar name. Duplicating or renaming the avatar makes the record mismatch, and the double-fix guard may complain (→ [FAQ](/en/faq#copied-avatar))

## Bake fix

Mesh Swap has a "**Bake Fix**" too: it bakes your edited expression into the mesh before fixing, making it robust against expression animations.

※ When combining with Avatar Mouth Fix, use Normal Fix, not Bake Fix.

## Optional features

### ⑤ Fine-tune mode

Adjust the fix result per BlendShape. The settings can be exported to / imported from JSON, so you can carry them over to an avatar rebuilt in Blender.

### ⑥ Blink animation combine

Merges blink and expression animations. Keys other than BlendShapes — PhysBones, object toggles and so on — are carried over intact.

The right-click Auto Fix can do the same → [Merging blinks into expression animations](/en/guide/animation)

## When combining with Avatar Mouth Fix

In the current version, the only supported combination is "Normal Fix in Mesh Swap" → "Avatar Mouth Fix", in that order.

If Avatar Mouth Fix is installed and you right-click → "Auto Fix (Recommended)", the tool first asks "**Will you also use Avatar Mouth Fix on this avatar?**".
If you will, choose [**Use Mouth Fix too**] — the fix runs right there as the supported Mesh Swap Normal Fix. Otherwise choose [**Use Blink Fix only**] for the usual non-destructive fix.

Combining with the non-destructive fix or Bake Fix is planned for a future update. Picking an unsupported combination shows guidance inside the tool.
