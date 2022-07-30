import axios from 'axios';

export const API = {
    async auth() {
        try {
            const response = await axios.get('http://135.181.35.61:2112/auth?user=USERNAME', {})
            console.log(response, 'AUTH')
            localStorage.setItem('key', response.headers.authorization)
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async getCompany(id:number, auth:any) {
        try {
            const response = await axios.get(`http://135.181.35.61:2112/companies/${id}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'COMPANY')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async patchCompany(id:number, auth:any) {
        try {
            const response = await axios.patch(`http://135.181.35.61:2112/companies/${id}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'patchCOMPANY')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async deleteCompany(id:number, auth:any) {
        try {
            const response = await axios.delete(`http://135.181.35.61:2112/companies/${id}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'deleteCOMPANY')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async addImage(id:number, file:any, auth:any) {
        try {
            const response = await axios.post(`http://135.181.35.61:2112/companies/${id}/image`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'ADDimg')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async deleteImage(id:number, file:any, auth:any) {
        try {
            const response = await axios.delete(`http://135.181.35.61:2112/companies/${id}/image/${file}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'DELETEimg')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async getContact(id:number, auth:any) {
        try {
            const response = await axios.get(`http://135.181.35.61:2112/contacts/${id}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'CONTACT')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    },

    async patchContact(id:number, auth:any) {
        try {
            const response = await axios.patch(`http://135.181.35.61:2112/contacts/${id}`, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`
                }})
            console.log(response, 'patchCONTACT')
            return response
        } catch (e) {
            console.log('Error:', e)
        }
    }
};