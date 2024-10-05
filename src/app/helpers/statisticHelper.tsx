const token = '5393734533:AAHuVoDZHXyLa5LZ4dqGgHCOQxOnduIVzAI';
const chatId = '1951205103';

export const updateStatistic = async (message: string): Promise<void> => {
    const userData = JSON.stringify(navigator)
    console.log(navigator)
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

        const data = await response.json();
    } catch (error) {
        // console.error('Помилка при відправці повідомлення:', error);
    }
};