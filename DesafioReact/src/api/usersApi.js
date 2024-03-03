const MONGO_URL_LOGIN = 'http://localhost:3001/auth';

export const login = async (data) => {
    const response = await fetch(`${MONGO_URL_LOGIN}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const dataResponse = await response.json();
    console.log('DataResponse:', dataResponse);
    // console.log('Token:', dataResponse.data);

    localStorage.setItem("token", dataResponse.data);
    // return dataResponse;
}

