    const _resources = [
        'posts',
        'comments',
        'albums',
        'photos',
        'todos',
        'users',
    ];

    const URL = 'https://jsonplaceholder.typicode.com/posts/1';
    const getFullUrl = (resource = '', uri) => `${URL}/${resource}${uri ? '/' + uri : ''}`;

    const hasResource = function _hasResource(argument) {
        return _resources.indexOf(argument);
    };

    const callApi = (resource = '', uri, options = {method:'GET'}) => {

        if (!hasResource)
            return {success: 'false', msg: 'resource not avaible'};

        const fullURL = getFullUrl(resource, uri);

        return  fetch(fullURL, options)
            .then(res => res.json());
    };

export {
        URL,
        getFullUrl,
        hasResource,
        callApi
    }
