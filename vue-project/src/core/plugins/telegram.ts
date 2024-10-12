import { ref, type Ref } from 'vue';

interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
    photo_url?: string;
}

interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat?: WebAppChat;
    chat_type?: string;
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date: number;
    hash: string;
}

interface WebAppChat {
    id: number;
    type: string;
    title: string;
    username?: string;
    photo_url?: string;
}

interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
    header_bg_color?: string;
    accent_text_color?: string;
    section_bg_color?: string;
    section_header_text_color?: string;
    section_separator_color?: string;
    subtitle_text_color?: string;
    destructive_text_color?: string;
}

interface PopupParams {
    title?: string;
    message: string;
    buttons?: Array<PopupButton>;
}

interface PopupButton {
    id?: string;
    type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
    text?: string;
}

interface ScanQrPopupParams {
    text?: string;
}

interface BiometricRequestAccessParams {
    reason?: string;
}

interface BiometricAuthenticateParams {
    reason?: string;
}

interface StoryShareParams {
    text?: string;
    widget_link?: StoryWidgetLink;
}

interface StoryWidgetLink {
    url: string;
    name?: string;
}

interface useTelegramComposableState {
    initData: string;
    initDataUnsafe: WebAppInitData;
    showMainButton: (text: string, callback: () => void) => void;
    hideMainButton: () => void;
    showBackButton: (callback: () => void) => void;
    hideBackButton: () => void;
    setButtonLoader: (state: boolean) => void;
    showAlert: (text: string) => void;
    openInvoice: (url: string, callback: (status: 'pending' | 'failed' | 'cancelled' | 'paid') => void) => void;
    closeApp: () => void;
    expand: () => void;
    getViewportStableHeight: () => number;
    getViewportHeight: () => number;
    vibrate: (style?: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' | 'error' | 'warning' | 'success') => void;
    ready: () => void;
    setHeaderColor: (color: string) => void;
    setBackgroundColor: (color: string) => void;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    enableVerticalSwipes: () => void;
    disableVerticalSwipes: () => void;
    onEvent: (eventType: string, eventHandler: (event: any) => void) => void;
    offEvent: (eventType: string, eventHandler: (event: any) => void) => void;
    sendData: (data: string) => void;
    switchInlineQuery: (query: string, choose_chat_types?: Array<string>) => void;
    openLink: (url: string, options?: { try_instant_view?: boolean }) => void;
    openTelegramLink: (url: string) => void;
    shareToStory: (media_url: string, params?: StoryShareParams) => void;
    showPopup: (params: PopupParams, callback?: (button_id: string | null) => void) => void;
    showConfirm: (message: string, callback: (confirmed: boolean) => void) => void;
    showScanQrPopup: (params: ScanQrPopupParams, callback: (data: string) => boolean) => void;
    closeScanQrPopup: () => void;
    readTextFromClipboard: (callback: (data: string | null) => void) => void;
    requestWriteAccess: (callback: (status: 'allowed' | 'cancelled') => void) => void;
    requestContact: (callback: (status: 'sent' | 'cancelled') => void) => void;
    requestBiometricAccess: (params: BiometricRequestAccessParams, callback: (status: 'allowed' | 'cancelled') => void) => void;
    authenticateBiometric: (params: BiometricAuthenticateParams, callback: (status: 'success' | 'failed') => void) => void;
    CloudStorage: any;
    BiometricManager: any;
    themeParams: ThemeParams;
    colorScheme: 'light' | 'dark' | undefined;
    platform: string;
    headerColor: string;
    backgroundColor: string;
}

export default function useTelegram(): useTelegramComposableState {

    const initData = window.Telegram.WebApp.initData;
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

    const mainButtonCallback = ref<(() => void) | null>(null);
    const backButtonCallback = ref<(() => void) | null>(null);

    const debugMainButton = ref<HTMLButtonElement | undefined>();
    const debugBackButton = ref<HTMLButtonElement | undefined>();

    function prepareDebugButton(reference: Ref<any>, className: string): void {
        if (window.Telegram.WebApp.platform !== 'unknown') return;
        if (reference.value !== undefined) return;

        const button = document.createElement('button');
        button.classList.add(className);
        document.body.appendChild(button);
        reference.value = button;
    }

    function setupButton(
        buttonRef: Ref<HTMLButtonElement | undefined>,
        callbackRef: Ref<(() => void) | null>,
        text: string,
        callback: () => void,
        telegramButton: any,
        className: string
    ): void {
        prepareDebugButton(buttonRef, className);

        if (callbackRef.value !== null) {
            telegramButton.offClick(callbackRef.value);
        }

        callbackRef.value = callback;

        telegramButton.text = text ?? 'Submit';
        telegramButton.onClick(callbackRef.value);
        telegramButton.isVisible = true;

        if (buttonRef.value !== undefined) {
            buttonRef.value.innerText = text ?? 'Submit';
            buttonRef.value.addEventListener('click', callbackRef.value);
            buttonRef.value.classList.add('visible');
        }
    }

    function clearButton(
        buttonRef: Ref<HTMLButtonElement | undefined>,
        callbackRef: Ref<(() => void) | null>,
        telegramButton: any
    ): void {
        if (callbackRef.value === null) {
            console.warn('No callback was set for the button.');
            return;
        }

        telegramButton.offClick(callbackRef.value);
        buttonRef.value?.removeEventListener('click', callbackRef.value);
        callbackRef.value = null;

        telegramButton.isVisible = false;
        buttonRef.value?.classList.remove('visible');
    }

    function showMainButton(text: string, callback: () => void): void {
        setupButton(debugMainButton, mainButtonCallback, text, callback, window.Telegram.WebApp.MainButton, 'fake-main-button');
    }

    function hideMainButton(): void {
        clearButton(debugMainButton, mainButtonCallback, window.Telegram.WebApp.MainButton);
    }

    function showBackButton(callback: () => void): void {
        setupButton(debugBackButton, backButtonCallback, '‹ Back', callback, window.Telegram.WebApp.BackButton, 'fake-back-button');
    }

    function hideBackButton(): void {
        clearButton(debugBackButton, backButtonCallback, window.Telegram.WebApp.BackButton);
    }

    function setButtonLoader(state: boolean): void {
        if (state) {
            window.Telegram.WebApp.MainButton.showProgress();
        } else {
            window.Telegram.WebApp.MainButton.hideProgress();
        }
    }

    function showAlert(text: string): void {
        window.Telegram.WebApp.showAlert(text);
    }

    function openInvoice(url: string, callback: (status: 'pending' | 'failed' | 'cancelled' | 'paid') => void): void {
        window.Telegram.WebApp.openInvoice(url, callback);
    }

    function closeApp(): void {
        window.Telegram.WebApp.close();
    }

    function expand(): void {
        window.Telegram.WebApp.expand();
    }

    function getViewportStableHeight(): number {
        return window.Telegram.WebApp.viewportStableHeight;
    }

    function getViewportHeight(): number {
        return window.Telegram.WebApp.viewportHeight;
    }

    function vibrate(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' | 'error' | 'warning' | 'success' = 'heavy'): void {
        switch (style) {
            case 'light':
            case 'medium':
            case 'heavy':
            case 'rigid':
            case 'soft':
                window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
                break;
            case 'error':
            case 'warning':
            case 'success':
                window.Telegram.WebApp.HapticFeedback.notificationOccurred(style);
                break;
        }
    }

    function ready(): void {
        window.Telegram.WebApp.ready();
    }

    function setHeaderColor(color: string): void {
        window.Telegram.WebApp.setHeaderColor(color);
    }

    function setBackgroundColor(color: string): void {
        window.Telegram.WebApp.setBackgroundColor(color);
    }

    function enableClosingConfirmation(): void {
        window.Telegram.WebApp.enableClosingConfirmation();
    }

    function disableClosingConfirmation(): void {
        window.Telegram.WebApp.disableClosingConfirmation();
    }

    function enableVerticalSwipes(): void {
        window.Telegram.WebApp.enableVerticalSwipes();
    }

    function disableVerticalSwipes(): void {
        window.Telegram.WebApp.disableVerticalSwipes();
    }

    function onEvent(eventType: string, eventHandler: (event: any) => void): void {
        window.Telegram.WebApp.onEvent(eventType, eventHandler);
    }

    function offEvent(eventType: string, eventHandler: (event: any) => void): void {
        window.Telegram.WebApp.offEvent(eventType, eventHandler);
    }

    function sendData(data: string): void {
        window.Telegram.WebApp.sendData(data);
    }

    function switchInlineQuery(query: string, choose_chat_types?: Array<string>): void {
        window.Telegram.WebApp.switchInlineQuery(query, choose_chat_types);
    }

    function openLink(url: string, options?: { try_instant_view?: boolean }): void {
        window.Telegram.WebApp.openLink(url, options);
    }

    function openTelegramLink(url: string): void {
        window.Telegram.WebApp.openTelegramLink(url);
    }

    function shareToStory(media_url: string, params?: StoryShareParams): void {
        window.Telegram.WebApp.shareToStory(media_url, params);
    }

    function showPopup(params: PopupParams, callback?: (button_id: string | null) => void): void {
        window.Telegram.WebApp.showPopup(params, callback);
    }

    function showConfirm(message: string, callback: (confirmed: boolean) => void): void {
        window.Telegram.WebApp.showConfirm(message, callback);
    }

    function showScanQrPopup(params: ScanQrPopupParams, callback: (data: string) => boolean): void {
        window.Telegram.WebApp.showScanQrPopup(params, callback);
    }

    function closeScanQrPopup(): void {
        window.Telegram.WebApp.closeScanQrPopup();
    }

    function readTextFromClipboard(callback: (data: string | null) => void): void {
        window.Telegram.WebApp.readTextFromClipboard(callback);
    }

    function requestWriteAccess(callback: (status: 'allowed' | 'cancelled') => void): void {
        window.Telegram.WebApp.requestWriteAccess(callback);
    }

    function requestContact(callback: (status: 'sent' | 'cancelled') => void): void {
        window.Telegram.WebApp.requestContact(callback);
    }

    // Новый код для работы с биометрией
    function requestBiometricAccess(params: BiometricRequestAccessParams, callback: (status: 'allowed' | 'cancelled') => void): void {
        window.Telegram.WebApp.BiometricManager.requestAccess(params, callback);
    }

    function authenticateBiometric(params: BiometricAuthenticateParams, callback: (status: 'success' | 'failed') => void): void {
        window.Telegram.WebApp.BiometricManager.authenticate(params, callback);
    }

    const CloudStorage = window.Telegram.WebApp.CloudStorage;
    const BiometricManager = window.Telegram.WebApp.BiometricManager;
    const themeParams = window.Telegram.WebApp.themeParams;
    const colorScheme = window.Telegram.WebApp.colorScheme;
    const platform = window.Telegram.WebApp.platform;
    const headerColor = window.Telegram.WebApp.headerColor;
    const backgroundColor = window.Telegram.WebApp.backgroundColor;

    return {
        initData,
        initDataUnsafe,
        showMainButton,
        hideMainButton,
        setButtonLoader,
        showAlert,
        openInvoice,
        closeApp,
        expand,
        getViewportStableHeight,
        getViewportHeight,
        showBackButton,
        hideBackButton,
        vibrate,
        ready,
        setHeaderColor,
        setBackgroundColor,
        enableClosingConfirmation,
        disableClosingConfirmation,
        enableVerticalSwipes,
        disableVerticalSwipes,
        onEvent,
        offEvent,
        sendData,
        switchInlineQuery,
        openLink,
        openTelegramLink,
        shareToStory,
        showPopup,
        showConfirm,
        showScanQrPopup,
        closeScanQrPopup,
        readTextFromClipboard,
        requestWriteAccess,
        requestContact,
        requestBiometricAccess,
        authenticateBiometric,
        CloudStorage,
        BiometricManager,
        themeParams,
        colorScheme,
        platform,
        headerColor,
        backgroundColor,
    };
}

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string;
                initDataUnsafe: WebAppInitData;
                version: string;
                platform: string;
                colorScheme: 'light' | 'dark';
                themeParams: ThemeParams;
                isExpanded: boolean;
                viewportHeight: number;
                viewportStableHeight: number;
                headerColor: string;
                backgroundColor: string;
                isClosingConfirmationEnabled: boolean;
                isVerticalSwipesEnabled: boolean;
                BackButton: any;
                MainButton: any;
                SettingsButton: any;
                HapticFeedback: any;
                CloudStorage: any;
                BiometricManager: {
                    requestAccess(params: BiometricRequestAccessParams, callback: (status: 'allowed' | 'cancelled') => void): void;
                    authenticate(params: BiometricAuthenticateParams, callback: (status: 'success' | 'failed') => void): void;
                };
                isVersionAtLeast(version: string): boolean;
                setHeaderColor(color: string): void;
                setBackgroundColor(color: string): void;
                enableClosingConfirmation(): void;
                disableClosingConfirmation(): void;
                enableVerticalSwipes(): void;
                disableVerticalSwipes(): void;
                onEvent(eventType: string, eventHandler: (event: any) => void): void;
                offEvent(eventType: string, eventHandler: (event: any) => void): void;
                sendData(data: string): void;
                switchInlineQuery(query: string, choose_chat_types?: Array<string>): void;
                openLink(url: string, options?: { try_instant_view?: boolean }): void;
                openTelegramLink(url: string): void;
                openInvoice(url: string, callback?: (status: 'pending' | 'failed' | 'cancelled' | 'paid') => void): void;
                shareToStory(media_url: string, params?: StoryShareParams): void;
                showPopup(params: PopupParams, callback?: (button_id: string | null) => void): void;
                showAlert(message: string, callback?: () => void): void;
                showConfirm(message: string, callback?: (confirmed: boolean) => void): void;
                showScanQrPopup(params: ScanQrPopupParams, callback?: (data: string) => boolean): void;
                closeScanQrPopup(): void;
                readTextFromClipboard(callback?: (data: string | null) => void): void;
                requestWriteAccess(callback?: (status: 'allowed' | 'cancelled') => void): void;
                requestContact(callback?: (status: 'sent' | 'cancelled') => void): void;
                ready(): void;
                expand(): void;
                close(): void;
            };
        };
    }
}

export {};