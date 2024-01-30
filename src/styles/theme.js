import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

export const theme = {
    size: {
        windowWidth: width,
        windowHeight: height,
    },
    color: {
        defaultColor1: '#000000',
        defaultColor2: '#ffffff',
        defaultColor3: '#808080',
        defaultColor4: '#BFBFBF',
        defaultColor5: '#E6E6E6',
        highlightColor1: '#DB850B',
        highlightColor2: '#593386',
        highlightColor3: '#08A133',
        highlightColor4: '#C9370A',
    },
    fontSize: {
        gg: 48,
        g: 40,
        m: 32,
        p: 24,
        pp: 16,
    },
    spacing: {
        gg: 40,
        g: 30,
        m: 20,
        p: 10,
        pp: 5,
    }
}