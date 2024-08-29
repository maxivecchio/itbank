document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notification-form');
    const result = document.getElementById('result');

    const savedPreferences = JSON.parse(localStorage.getItem('notificationPreferences')) || {};
    document.getElementById('email-promotions').checked = savedPreferences.emailPromotions || false;
    document.getElementById('email-updates').checked = savedPreferences.emailUpdates || false;
    document.getElementById('email-frequency').value = savedPreferences.emailFrequency || 'daily';

    document.getElementById('sms-alerts').checked = savedPreferences.smsAlerts || false;
    document.getElementById('sms-frequency').value = savedPreferences.smsFrequency || 'immediate';

    document.getElementById('app-news').checked = savedPreferences.appNews || false;
    document.getElementById('app-messages').checked = savedPreferences.appMessages || false;
    document.getElementById('app-frequency').value = savedPreferences.appFrequency || 'instant';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const preferences = {
            emailPromotions: document.getElementById('email-promotions').checked,
            emailUpdates: document.getElementById('email-updates').checked,
            emailFrequency: document.getElementById('email-frequency').value,
            
            smsAlerts: document.getElementById('sms-alerts').checked,
            smsFrequency: document.getElementById('sms-frequency').value,

            appNews: document.getElementById('app-news').checked,
            appMessages: document.getElementById('app-messages').checked,
            appFrequency: document.getElementById('app-frequency').value
        };

        localStorage.setItem('notificationPreferences', JSON.stringify(preferences));
        
        result.textContent = 'Preferencias guardadas con éxito.';
    });
});
