# Auto Fix (Recommended)

The easiest way to use the tool. Start here.

For the full flow from expression editing to upload → [The Full Workflow](/en/guide/workflow)

## Steps

1. **Right-click your avatar in the Hierarchy**
2. Choose "**Avatar Blink Fix**" → "**自動修正（推奨）**" (Auto Fix – Recommended; the menu is shown in Japanese)

   ![The Avatar Blink Fix submenu in the right-click menu](/images/context-menu.png)

3. When "The blink fix has been set up" appears, you're done

   ![Completion dialog: the blink fix has been set up and will be applied at upload time](/images/fixed-dialog.png)

4. If you use expression animations, [check for conflicts](/en/guide/workflow) before uploading
5. Upload as usual. The fix is applied automatically

An object called "Avatar Blink Fix (NDMF)" is added under the avatar. All the settings live on it.

![Inspector after the fix, showing detection counts and the Reload Expression / Stop preview buttons](/images/easy-normal.png)

## Check the fixed face right away

Running Auto Fix turns the preview on automatically, so the avatar in your scene shows the fixed face.
You can see on the spot whether it's repaired.

If the Inspector button shows the red "**Stop preview**", the preview is ON.

::: tip The real fix happens at upload
This method is non-destructive — the original mesh is untouched. The preview only shows how the fix will look; the actual fix is **applied at upload (build) time**.
Even if you stop the preview, the upload still gets fixed.
:::

## Redoing your expression edits later

::: warning Press "Stop preview" first
While previewing, the displayed mesh is swapped for the fixed one.
**Editing expressions in that state can give unintended results.**
:::

1. Press "**Stop preview**" in the Inspector
2. Redo your expression edits
3. Press "**Reload Expression**"

The fix remembers the BlendShape values from the moment you ran Auto Fix. After re-editing, step 3 makes it re-record them.

Deleting the "Avatar Blink Fix (NDMF)" object and right-clicking → Auto Fix again gives the same result. Whichever you find easier.
If you right-click again without deleting the object, you'll see "Component Already Exists — Replace it with a new one?". **Pressing [Replace] is fine** — the settings are rebuilt from the current face.

::: tip When creating or editing expression animation clips
The steps above are for re-adjusting the face mesh's BlendShapes.

When creating or editing expression **animations** in an expression tool, keep the "Avatar Blink Fix (NDMF)" object and work **with the preview ON**.
:::

## Undoing everything

Delete the added "Avatar Blink Fix (NDMF)" object. The original mesh was never rewritten.

## If "conflict with expression animations" appears

The tool found an expression animation driving a BlendShape that's being fixed.
Left as is, the eyes may move wrong in-game when you play expressions.

If you edit expression animations with FaceEmo or another tool, remove any entry that holds a corrected BlendShape at value 0. Leaving it in may conflict with the corrected BlendShape.

If you will keep the avatar's original expression animations unchanged, pressing "**Switch to Bake mode**" is recommended. Your settings carry over into [Bake Mode](/en/guide/bake), and you do not need to remove those zero-value entries.

If overdriven values (above 100 or negative) are detected, switch to Bake mode — normal mode can't reproduce them.

→ Curious what actually changes? [Bake vs Normal Mode](/en/guide/bake-vs-normal)

## Avatars without a preset

The tool works on avatars without an Auto Fix preset too. Right-click → "**手動修正**" (Manual Fix) and pick the BlendShapes to fix yourself.

→ [Manual Fix (for avatars without a preset)](/en/guide/manual-fix)

Supported avatar but no preset found? → See the [FAQ](/en/faq#preset-missing).

## Face tracking (FT) avatars

When FT eye-close BlendShapes are found, you can choose whether to include them. In normal mode the default is "**Don't include**". Switch to "Include in fix" only if FT eye closing breaks in-game.

→ [Using Face Tracking](/en/guide/face-tracking)

---

As an extra feature, you can also mix blinking into your existing expression animations (Complete Edition)
→ [Merging blinks into expression animations](/en/guide/animation)
