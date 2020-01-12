import app from './Router/index';

const port = process.env.PORT || 500;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

export { app as default };
