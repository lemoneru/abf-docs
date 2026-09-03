# Bake Mode

[Which Mode Should I Use?](/en/guide/bake-vs-normal)

Bake Mode bakes your edited expression into the mesh as its shape at BlendShape value 0, then applies the fix.<br>
It may reduce breakage caused by conflicts with expression animations.

Note: Bake Mode is a Complete Edition feature.

## When to use it

- You use face tracking
- You want to keep the avatar's original expression animations unchanged
- The eyes look wrong in-game when using Normal Mode
- Your expression edits use values above 100 or negative values

## ① Set up Bake Mode

Right-click your avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（ベイクモード）] (Auto Fix – Bake Mode).<br>
An Avatar Blink Fix object is added inside the avatar, and you can preview the baked expression. The right-click menu is displayed in Japanese.

If you already use Normal Mode, press [Switch to Bake mode] in the Inspector.<br>
Your selections and settings carry over.

![Bake Mode Inspector with bake range and preview settings](/images/easy-bake.png)

## ② Check the bake range

By default, the BlendShapes you edited are baked together.<br>
MMD BlendShapes and those unchanged from the avatar's original default values are not included automatically.

Use [Bake Range] if you do not want to bake edits outside the eyes.<br>
To select individual shapes, open [Advanced Settings] → [BlendShapes to Bake].

| Name color | What gets baked |
|---|---|
| Cyan | Eye-area shapes. Leave these selected because they are needed for the fix |
| Orange | Other areas, such as the mouth and brows. Uncheck shapes you do not want baked |

![Bake target list with cyan eye-area shapes and orange mouth and brow shapes](/images/bake-legend.png)

## ③ Check the preview

Baked BlendShapes have a value of 0 during the preview.<br>
The edited shape is baked into the mesh, so the avatar still shows the edited expression at value 0.

Press [Preview the baked result] to resume the preview.<br>
Baking and fixing are applied at upload time even if the preview is OFF.

::: warning Redoing expression edits
Press [Stop preview] before adjusting the face's BlendShapes.<br>
When you finish editing, press [Reload Expression].
:::

See [The Full Workflow](/en/guide/workflow) for checks before and after uploading.

## Using face tracking

Bake Mode includes FT eye-close BlendShapes in the fix by default.<br>
Keep [Include in fix] selected and check how the eyes close.<br>
See [Using Face Tracking](/en/guide/face-tracking) for the settings.

## Restoring the avatar

Delete the added Avatar Blink Fix object.<br>
The original mesh is not overwritten, so the avatar returns to its state before the fix.
