import firebase from 'firebase';

export function fetchFirebaseList(path) {
    return new Promise((resolve) => {
        firebase.database().ref(path)
            .once('value', resolveList(resolve));
    });
}

function resolveList(resolve) {
    return (snapshot) => {
        const dataMap = snapshot.val();
        resolve(
            Object.keys(dataMap)
                .map(key => dataMap[key])
        );
    };
}
