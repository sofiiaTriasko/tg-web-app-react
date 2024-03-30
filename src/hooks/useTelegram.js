const tg = window.Telegram.WebApp;

export function useTelegram() {

    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.mainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show
        }
    }

    const user = tg.initDataUnsafe?.user.username;

    return {
        onClose,
        tg,
        user
    }
}
