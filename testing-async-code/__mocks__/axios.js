const get = url => {
    console.log('Fetching data from mock axios...');
    return Promise.resolve({ data: { title: 'delectus aut autem' } });
}
exports.get = get;