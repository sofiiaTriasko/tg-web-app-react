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

    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user.username
    }
}
