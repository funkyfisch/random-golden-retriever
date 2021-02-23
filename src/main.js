import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: ["karntasi", "bratan", "patsan"][Math.floor(Math.random() * 3)]
    }
});

export default app;