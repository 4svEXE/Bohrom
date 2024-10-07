const token = '5393734533:AAHuVoDZHXyLa5LZ4dqGgHCOQxOnduIVzAI';
const chatId = '1951205103';

export const updateStatistic = async (message: string): Promise<void> => {
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("message: " + message + " ====== " + navigator.appVersion)}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Помилка: ${response.statusText}`);
        }
    } catch (error) {
        // console.error('Помилка при відправці повідомлення:', error);
    }
};

window.onload = () => {
    updateStatistic("Phage loaded");
};