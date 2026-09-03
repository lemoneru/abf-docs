# Merging Blinks into Expression Animations (Extra Feature)

Combine your favorite blink animation, such as a teary blink, with your expressions.<br>
This feature generates BlendShapes and new animation files for the combined movement.

Note: This is a Complete Edition extra. You do not need it for a regular blink fix.

## ① Prepare the animations

Finish your expression edits and set up the blink fix, then prepare:

- The expression animations to combine with
- The blink animation you want to add

This feature does not create the blink animation itself. You need to provide one.

## ② Open Animation Support

Open [Advanced Settings] → [Animation Support] in the Avatar Blink Fix Inspector.<br>
For Mesh Swap, use [⑥ Blink animation combine] in the window.

<div class="usage-branch">

### Expression animations

Drag the expression animation `.anim` files into [Expression Animation].<br>
You can add several files at once.

Use [Combine Target BlendShape] to choose where to combine the blink.

</div>

<div class="usage-branch">

### Blink animation

Put the `.anim` file you want to use in [Blink Animation].<br>
Use [Blink BlendShape] to select the BlendShape used for blinking in that animation.

</div>

## ③ Check the blend mode

If "Same BlendShapes are used" appears, choose a [Blend Mode].

| Blend mode | Result |
|---|---|
| Expression priority | Prioritizes the expression's shape, such as smiling eyes |
| Blink priority | Prioritizes blinking while an expression is active |

Start with [Expression priority].<br>
If you want blinking during expressions too, try [Blink priority] and compare.

## ④ Generate the animations

Press [Generate Animation BlendShapes/Animations].<br>
New files are created without overwriting the original expression animations. Non-BlendShape keys, such as PhysBones and object toggles, are carried over too.

The output folder is:

```text
Assets/LEMONERU/Avatar Blink Fix/Animation/<avatar name>/<timestamp>/
```

Generated file names use the original animation name followed by `_ABF_Blink`.

::: details About [Overwrite on re-generate]
By default, each generation creates a timestamped folder.<br>
Checking this option overwrites the previously generated files in the same location.
:::

## ⑤ Replace the animations

In FaceEmo or your expression setup tool, replace the original animations with the generated `_ABF_Blink` files.<br>
This step is required because the avatar's settings are not changed automatically.

::: warning Your expression tool's blink setting
Turn OFF any option that enables blinking in the expression setup tool.<br>
The generated animations already contain blinking, so the movement may be applied twice.
:::

Upload after replacing the files, then check blinking in VRChat while switching expressions.

## When it does not work

| Symptom | What to check |
|---|---|
| A file cannot be added to a setting | Drag the `.anim` file from the Project window |
| The generate button is disabled | Assign an expression animation, or assign a blink animation and select its [Blink BlendShape] |
| Nothing changes in-game | Check the animation replacement in step ⑤ |
| Blinking is too fast or appears doubled | Check the expression tool's blink option |
| An expression looks wrong | Change the blend mode and regenerate |

If you change the face's BlendShapes after generating, update the blink fix settings and regenerate the animations.<br>
Replace the animations with the newly generated files as well.

If the problem remains, please [get in touch](/en/faq#contact).
