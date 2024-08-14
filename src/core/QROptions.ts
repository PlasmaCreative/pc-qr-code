import qrTypes from "../constants/qrTypes";
import dotTypes from "../constants/dotTypes";
import drawTypes from "../constants/drawTypes";
import cornerSquareTypes from "../constants/cornerSquareTypes";
import cornerDotTypes from "../constants/cornerDotTypes";
import errorCorrectionLevels from "../constants/errorCorrectionLevels";
import {
  DotType,
  Options,
  TypeNumber,
  ErrorCorrectionLevel,
  Mode,
  DrawType,
  Gradient,
  CornerSquareType,
  CornerDotType
} from "../types";

export interface RequiredOptions extends Options {
  type: DrawType;
  width: number;
  height: number;
  margin: number;
  data: string;
  qrOptions: {
    typeNumber: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
  };
  imageOptions: {
    hideBackgroundDots: boolean;
    imageSize: number;
    crossOrigin?: string;
    margin: number;
  };
  dotsOptions: {
    type: DotType;
    color: string;
    gradient?: Gradient;
  };
  backgroundOptions: {
    color: string;
    gradient?: Gradient;
  };
  cornersSquareOptions: {
    type: CornerSquareType;
    color: string;
    gradient?: Gradient;
  };
  cornersDotOptions: {
    type: CornerDotType;
    color: string;
    gradient?: Gradient;
  };
  useLegacyDotRotation: boolean;
}

const defaultOptions: RequiredOptions = {
  type: drawTypes.canvas,
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: qrTypes[0],
    mode: undefined,
    errorCorrectionLevel: errorCorrectionLevels.Q
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    crossOrigin: "anonymous",
    margin: 0
  },
  dotsOptions: {
    type: dotTypes.square,
    color: "#000"
  },
  cornersSquareOptions: {
    type: cornerSquareTypes.square,
    color: "#000"
  },
  cornersDotOptions: {
    type: cornerDotTypes.square,
    color: "#000"
  },
  backgroundOptions: {
    color: "transparent"
  },
  useLegacyDotRotation: false
};

export default defaultOptions;
