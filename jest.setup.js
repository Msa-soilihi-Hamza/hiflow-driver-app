// Standard mock for react-native-svg
jest.mock('react-native-svg', () => {
    return {
        Svg: 'Svg',
        Path: 'Path',
        Circle: 'Circle',
        Rect: 'Rect',
        G: 'G',
        Polyline: 'Polyline',
        Polygon: 'Polygon',
        Line: 'Line',
        Ellipse: 'Ellipse',
        Text: 'Text',
        TSpan: 'TSpan',
        TextPath: 'TextPath',
        Use: 'Use',
        Symbol: 'Symbol',
        Defs: 'Defs',
        LinearGradient: 'LinearGradient',
        RadialGradient: 'RadialGradient',
        Stop: 'Stop',
        ClipPath: 'ClipPath',
        Pattern: 'Pattern',
        Mask: 'Mask',
    };
});

// Mocking Lucide icons
jest.mock('lucide-react-native', () => {
    return new Proxy({}, {
        get: (target, name) => {
            const mockComponent = (props) => null;
            mockComponent.displayName = `LucideIcon_${String(name)}`;
            return mockComponent;
        }
    });
});

// Avoid Sentry issues in tests
jest.mock('@sentry/react-native', () => ({
    init: jest.fn(),
    captureException: jest.fn(),
    captureMessage: jest.fn(),
}));

// Provide base mocks for React Native
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');