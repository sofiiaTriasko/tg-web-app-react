export function useTelegram() {

    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    const user = tg.initDataUnsafe ? tg.initDataUnsafe.user.username : undefined;

    return {
        onClose,
        tg,
        user,
        onToggleButton
    }
}
