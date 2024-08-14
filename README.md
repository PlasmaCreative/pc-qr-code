# PC QR Code

JavaScript library for generating QR codes with a logo and styling.

This is a fork of the currently unmaintained [repository by kozakdenys](https://github.com/kozakdenys/qr-code-styling). Try the old version here https://qr-code-styling.com to get a feel

### Examples

[ProQR.tools](https://proqr.tools)



### API Documentation

#### PCQRCode instance

`new PCQRCode(options) => PCQRCode`

| Param   | Type   | Description |
| ------- | ------ | ----------- |
| options | object | Init object |

`options` structure

| Property                | Type                      | Default Value | Description                                                                                   |
| ----------------------- | ------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| width                   | number                    | `300`         | Size of canvas                                                                                |
| height                  | number                    | `300`         | Size of canvas                                                                                |
| type                    | string (`'canvas' 'svg'`) | `canvas`      | The type of the element that will be rendered                                                 |
| data                    | string                    |               | The date will be encoded to the QR code                                                       |
| image                   | string                    |               | The image will be copied to the center of the QR code                                         |
| margin                  | number                    | `0`           | Margin around canvas                                                                          |
| qrOptions               | object                    |               | Options will be passed to `qrcode-generator` lib                                              |
| imageOptions            | object                    |               | Specific image options, details see below                                                     |
| dotsOptions             | object                    |               | Dots styling options                                                                          |
| cornersSquareOptions    | object                    |               | Square in the corners styling options                                                         |
| cornersDotOptionsHelper | object                    |               | Dots in the corners styling options                                                           |
| backgroundOptions       | object                    |               | QR background styling options                                                                 |
| useLegacyDotRotation    | boolean                   | false         | Use the mirrored qr creation strategy of the original library. (Some scanners might not work) |

`options.qrOptions` structure

| Property             | Type                                               | Default Value |
| -------------------- | -------------------------------------------------- | ------------- |
| typeNumber           | number (`0 - 40`)                                  | `0`           |
| mode                 | string (`'Numeric' 'Alphanumeric' 'Byte' 'Kanji'`) |
| errorCorrectionLevel | string (`'L' 'M' 'Q' 'H'`)                         | `'Q'`         |

`options.imageOptions` structure

| Property           | Type                                    | Default Value | Description                                                                    |
| ------------------ | --------------------------------------- | ------------- | ------------------------------------------------------------------------------ |
| hideBackgroundDots | boolean                                 | `true`        | Hide all dots covered by the image                                             |
| imageSize          | number                                  | `0.4`         | Coefficient of the image size. Not recommended to use ove 0.5. Lower is better |
| margin             | number                                  | `0`           | Margin of the image in px                                                      |
| crossOrigin        | string(`'anonymous' 'use-credentials'`) | `anonymous`   |                                                                                |

`options.dotsOptions` structure

| Property | Type                                                                           | Default Value | Description         |
| -------- | ------------------------------------------------------------------------------ | ------------- | ------------------- |
| color    | string                                                                         | `'#000'`      | Color of QR dots    |
| gradient | object                                                                         |               | Gradient of QR dots |
| type     | string (`'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'`) | `'square'`    | Style of QR dots    |

`options.backgroundOptions` structure

| Property | Type   | Default Value |
| -------- | ------ | ------------- |
| color    | string | `'#fff'`      |
| gradient | object |

`options.cornersSquareOptions` structure

| Property | Type                                      | Default Value | Description                |
| -------- | ----------------------------------------- | ------------- | -------------------------- |
| color    | string                                    | `#000`        | Color of Corners Square    |
| gradient | object                                    |               | Gradient of Corners Square |
| type     | string (`'rounded' 'circle' 'classy' 'classy-rounded' 'square' 'extra-rounded'`) | `'square'`    | Style of Corners Square    |

`options.cornersDotOptions` structure

| Property | Type                      | Default Value | Description             |
| -------- | ------------------------- | ------------- | ----------------------- |
| color    | string                    | `#000`        | Color of Corners Dot    |
| gradient | object                    |               | Gradient of Corners Dot |
| type     | string (`'rounded' 'circle' 'classy' 'classy-rounded' 'square' 'extra-rounded'`) | `'square'`    | Style of Corners Dot    |

Gradient structure

`options.dotsOptions.gradient`

`options.backgroundOptions.gradient`

`options.cornersSquareOptions.gradient`

`options.cornersDotOptions.gradient`

| Property   | Type                         | Default Value | Description                                                                            |
| ---------- | ---------------------------- | ------------- | -------------------------------------------------------------------------------------- |
| type       | string (`'linear' 'radial'`) | "linear"      | Type of gradient spread                                                                |
| rotation   | number                       | 0             | Rotation of gradient in radians (Math.PI === 180 degrees)                              |
| colorStops | array of objects             |               | Gradient colors. Example `[{ offset: 0, color: 'blue' }, { offset: 1, color: 'red' }]` |

Gradient colorStops structure

`options.dotsOptions.gradient.colorStops[]`

`options.backgroundOptions.gradient.colorStops[]`

`options.cornersSquareOptions.gradient.colorStops[]`

`options.cornersDotOptions.gradient.colorStops[]`

| Property | Type             | Default Value | Description                         |
| -------- | ---------------- | ------------- | ----------------------------------- |
| offset   | number (`0 - 1`) |               | Position of color in gradient range |
| color    | string           |               | Color of stop in gradient range     |

#### PCQRCode methods

`PCQRCode.append(container) => void`

| Param     | Type        | Description                                              |
| --------- | ----------- | -------------------------------------------------------- |
| container | DOM element | This container will be used for appending of the QR code |

`PCQRCode.getRawData(extension) => Promise<Blob>`

| Param     | Type                                 | Default Value | Description |
| --------- | ------------------------------------ | ------------- | ----------- |
| extension | string (`'png' 'jpeg' 'webp' 'svg'`) | `'png'`       | Blob type   |

`PCQRCode.update(options) => void`

| Param   | Type   | Description                            |
| ------- | ------ | -------------------------------------- |
| options | object | The same options as for initialization |

`PCQRCode.download(downloadOptions, quality) => Promise<void>`

| Param           | Type   | Description                                                                                                                                                                                                                                                                                                 |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| downloadOptions | object | Options with extension and name of file (not required)                                                                                                                                                                                                                                                      |
| quality         | number | A Number between 0 and 1 indicating the image quality to be used when creating images using file formats that support lossy compression (such as image/jpeg or image/webp). A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range. |

`downloadOptions` structure

| Property  | Type                                 | Default Value | Description                 |
| --------- | ------------------------------------ | ------------- | --------------------------- |
| name      | string                               | `'qr'`        | Name of the downloaded file |
| extension | string (`'png' 'jpeg' 'webp' 'svg'`) | `'png'`       | File extension              |

`PCQRCode.toDataUrl(extension, quality) => Promise<void>`

| Param     | Type                           | Default Value | Description                                                                                                                                                                                                                                                                                                  |
| --------- | ------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| extension | string (`'png' 'jpeg' 'webp')` | 'png'         | Blob type                                                                                                                                                                                                                                                                                                    |
| quality   | number                         | undefined     | A Number between 0 and 1 indicating the image quality to be used when creating images using file formats that support lossy compression (such as image/jpeg or image/webp). A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range. |