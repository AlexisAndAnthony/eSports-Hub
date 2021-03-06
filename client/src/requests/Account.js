import axios from 'axios';

export async function authenticate(googleData, updateLogin, setDisplayError) {
    let res = await axios.post('http://localhost:8080/api/users/auth', {
        data: {
            token: googleData.tokenId
        }
        })
        .then(function (response) {
            console.log('Response: ' , response);
            updateLogin(true);
            setDisplayError(false);
            return response;
        })
        .catch(function (error, response) {
            setDisplayError(true);
            console.log('Error: ' + error);
            console.error(error);
            return response;
        }
    );
    console.log(res);
    return res;

}

export async function createAccount(setRedirect, id, email) {
    console.log('inserting...', id, email);
    let res = await axios.post('http://localhost:8080/api/users', 
        {
            _id: id,
            email: email,
        }
        )
        .then(function (response) {
            console.log('Response: ' , response);
            setRedirect(true);
            return response;
        })
        .catch(function (error, response) {
            console.log('Error: ' + error);
            console.error(error);
            return response;
        }
    );
    console.log(res);
    return res;
}

export async function updateAccount(id, email, display_name, tags, profile_picture_url) {
    await axios.post('http://localhost:8080/api/users', 
        {
            _id: id,
            email: email,
            display_name: display_name,
            tags: tags,
            profile_picture_url: profile_picture_url
        }
        )
        .then(function (response) {
        console.log('Response: ' + response);
        })
        .catch(function (error) {
        console.log('Error: ' + error);
    });
}