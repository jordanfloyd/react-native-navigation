/// <reference types="react-native" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare class Element extends React.Component<{
    elementId: any;
    resizeMode?: any;
}, any> {
    static propTypes: {
        elementId: PropTypes.Validator<string>;
        resizeMode: PropTypes.Requireable<string>;
    } | {
        hitSlop?: PropTypes.Validator<import("react-native").Insets | null | undefined> | undefined;
        onLayout?: PropTypes.Validator<((event: import("react-native").LayoutChangeEvent) => void) | null | undefined> | undefined;
        pointerEvents?: PropTypes.Validator<"auto" | "box-none" | "none" | "box-only" | null | undefined> | undefined;
        removeClippedSubviews?: PropTypes.Validator<boolean | null | undefined> | undefined;
        style?: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        testID?: PropTypes.Validator<string | null | undefined> | undefined;
        collapsable?: PropTypes.Validator<boolean | null | undefined> | undefined;
        needsOffscreenAlphaCompositing?: PropTypes.Validator<boolean | null | undefined> | undefined;
        renderToHardwareTextureAndroid?: PropTypes.Validator<boolean | null | undefined> | undefined;
        accessibilityViewIsModal?: PropTypes.Validator<boolean | null | undefined> | undefined;
        accessibilityActions?: PropTypes.Validator<string[] | null | undefined> | undefined;
        onAccessibilityAction?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        shouldRasterizeIOS?: PropTypes.Validator<boolean | null | undefined> | undefined;
        onStartShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | null | undefined> | undefined;
        onMoveShouldSetResponder?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | null | undefined> | undefined;
        onResponderEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onResponderGrant?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onResponderReject?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onResponderMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onResponderRelease?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onResponderStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onResponderTerminationRequest?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | null | undefined> | undefined;
        onResponderTerminate?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onStartShouldSetResponderCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => boolean) | null | undefined> | undefined;
        onMoveShouldSetResponderCapture?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onTouchStart?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onTouchMove?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onTouchEnd?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onTouchCancel?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        onTouchEndCapture?: PropTypes.Validator<((event: import("react-native").GestureResponderEvent) => void) | null | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | null | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | null | undefined> | undefined;
        accessibilityComponentType?: PropTypes.Validator<"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked" | null | undefined> | undefined;
        accessibilityLiveRegion?: PropTypes.Validator<"none" | "polite" | "assertive" | null | undefined> | undefined;
        importantForAccessibility?: PropTypes.Validator<"auto" | "yes" | "no" | "no-hide-descendants" | null | undefined> | undefined;
        accessibilityTraits?: PropTypes.Validator<"selected" | "image" | "none" | "button" | "link" | "header" | "search" | "plays" | "key" | "text" | "summary" | "disabled" | "frequentUpdates" | "startsMedia" | "adjustable" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTraits[] | null | undefined> | undefined;
        onAcccessibilityTap?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onMagicTap?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        elementId: PropTypes.Validator<string>;
        resizeMode: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        resizeMode: string;
    };
    render(): JSX.Element;
}
