# Bake Mode

[How to Choose a Fix Mode](/en/guide/bake-vs-normal)

Bake Mode reconstructs your edited expression as the shape at BlendShape value 0.<br>
This makes the edited expression the default expression, which may reduce breakage caused by animation conflicts.

You can also use it for expression edits with values above 100 or negative values.

Note: Bake Mode is a Complete Edition feature.

## When to use it

- You use face tracking
- You want to keep the avatar's original expression animations unchanged
- The eyes look wrong in-game when using Auto Fix (Recommended)
- Your expression edits use values above 100 or negative values

## ① Set up Bake Mode

Right-click your avatar in the Hierarchy and choose [Avatar Blink Fix] → [自動修正（ベイクモード）] (Auto Fix – Bake Mode).<br>
An Avatar Blink Fix object is added inside the avatar, and you can preview the baked expression. The right-click menu is displayed in Japanese.

If you already use Auto Fix (Recommended), press [Switch to Bake mode] in the Inspector.<br>
Your selections and settings carry over.

![Bake Mode Inspector with bake range and preview settings](/images/easy-bake.png)

## ② Check the bake range

By default, the BlendShapes you edited are baked together.<br>
MMD BlendShapes and those unchanged from the avatar's original default values are not included automatically.

Use [Bake Range] if you do not want to bake edits outside the eyes.<br>
To select individual shapes, open [Advanced Settings] → [BlendShapes to Bake].

| Name color | What gets baked |
|---|---|
| Cyan | Eye-area shapes and shapes using values outside 0–100. Leave these selected because they are needed for the fix |
| Orange | Other areas, such as the mouth and brows. Uncheck shapes you do not want baked |

![Bake target list with cyan eye-area shapes and orange mouth and brow shapes](/images/bake-legend.png)

### If the mouth's shape or movement looks wrong {#bake-mouth}

Baking mouth edits together with other edits using [All (Recommended)] can make the mouth's shape or movement look wrong.<br>
If this happens, try excluding the mouth BlendShapes from the bake targets.

- **To exclude non-eye edits together:** Set [Bake Range] to [Eyes Only]. Shapes using values outside 0–100 remain included even with this setting.
- **To exclude individual shapes:** Press [Stop preview], then open [Advanced Settings] → [BlendShapes to Bake]. Uncheck the orange items you do not want baked.

Changing [Bake Range] resets manual selections to the automatic setup.<br>
Choose the range before adjusting individual shapes.

Leave cyan items selected.<br>
After changing the settings, press [Preview the baked result] and check the expression and mouth movement.

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
