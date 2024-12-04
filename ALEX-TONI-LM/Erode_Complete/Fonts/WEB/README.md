# Installing Webfonts
Follow these simple Steps.

## 1.
Put `erode/` Folder into a Folder called `fonts/`.

## 2.
Put `erode.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `erode.css` depends on your Website Filesystem.

## 4.
Import `erode.css` at the top of you main Stylesheet.

```
@import url('erode.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: Erode-Light;
font-family: Erode-LightItalic;
font-family: Erode-Regular;
font-family: Erode-Italic;
font-family: Erode-Medium;
font-family: Erode-MediumItalic;
font-family: Erode-Semibold;
font-family: Erode-SemiboldItalic;
font-family: Erode-Bold;
font-family: Erode-BoldItalic;
font-family: Erode-Variable;
font-family: Erode-VariableItalic;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 300.0

Available axes:
'wght' (range from 300.0 to 700.0

