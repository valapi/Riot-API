//import
import { CustomEvent, type ValorantAPIError } from "@valapi/lib";

import axios, { type Axios, type AxiosRequestConfig, type AxiosError } from 'axios';

//interface
interface RiotAPIAxios<RiotAPIAxiosReturn> {
    isError: boolean,
    data: RiotAPIAxiosReturn,
}

type RiotAPIAxiosMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' ;

interface RiotAPIAxiosRequest {
    method: RiotAPIAxiosMethod,
    url: string,
    body: Object,
    config: AxiosRequestConfig,
}

//class
class AxiosClient extends CustomEvent {
    axiosClient: Axios;

    /**
    * @param {AxiosRequestConfig} config Config
    */
    constructor(config: AxiosRequestConfig = {}) {
        super();

        if(!config.timeout){
            config.timeout = 60000; // 1 minute (60 * 1000)
        }

        this.axiosClient = axios.create(config);
        this.emit('ready');
    }

    /**
     * 
     * @param {AxiosError} error Axios Error
     * @returns 
     */
     private errorHandler(error:AxiosError):RiotAPIAxios<any> {
        //event
        this.emit('error', {
            errorCode: 'RiotAPI_Request_Error',
            message: error.message,
            data: error,
        })

        //data
        if(error.response && error.response.data){
            return {
                isError: error.isAxiosError,
                data: error.response.data,
            }
        }

        if(error.response && error.response.status && error.response.statusText){
            return {
                isError: error.isAxiosError,
                data: {
                    errorCode: error.response.status,
                    message: error.response.statusText,
                }
            }
        }

        return {
            isError: error.isAxiosError,
            data: {
                errorCode: error.name,
                message: error.message,
            }
        }
     }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<RiotAPIAxios<any>>}
    */
     public async get(url:string, config:AxiosRequestConfig = {}):Promise<RiotAPIAxios<any>> {
        //setup
        let _error = false;

        const RequestData:RiotAPIAxiosRequest = {
            method: 'get',
            url: url,
            body: {},
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.axiosClient.get(url, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:any) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<RiotAPIAxios<any>>}
    */
     public async post(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<RiotAPIAxios<any>> {
        //setup
        let _error = false;

        const RequestData:RiotAPIAxiosRequest = {
            method: 'post',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.axiosClient.post(url, body, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:any) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<RiotAPIAxios<any>>}
    */
     public async put(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<RiotAPIAxios<any>> {
        //setup
        let _error = false;

        const RequestData:RiotAPIAxiosRequest = {
            method: 'put',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.axiosClient.put(url, body, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:any) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<RiotAPIAxios<any>>}
    */
     public async patch(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<RiotAPIAxios<any>> {
        //setup
        let _error = false;

        const RequestData:RiotAPIAxiosRequest = {
            method: 'patch',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.axiosClient.patch(url, body, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:any) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<RiotAPIAxios<any>>}
    */
     public async delete(url:string, config:AxiosRequestConfig = {}):Promise<RiotAPIAxios<any>> {
        //setup
        let _error = false;

        const RequestData:RiotAPIAxiosRequest = {
            method: 'delete',
            url: url,
            body: {},
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.axiosClient.post(url, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:any) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }
}

//event

interface RiotAPIAxiosEvent {
    'ready': () => void;
    'request': (data: RiotAPIAxiosRequest) => void;
    'error': (data: ValorantAPIError) => void;
}

declare interface AxiosClient {
    on<EventName extends keyof RiotAPIAxiosEvent>(name: EventName, callback: RiotAPIAxiosEvent[EventName]): void;
    once<EventName extends keyof RiotAPIAxiosEvent>(name: EventName, callback: RiotAPIAxiosEvent[EventName]): void;
    off<EventName extends keyof RiotAPIAxiosEvent>(name: EventName, callback?: RiotAPIAxiosEvent[EventName]): void;
}

//export
export { AxiosClient };
export type { RiotAPIAxios, RiotAPIAxiosMethod, RiotAPIAxiosRequest, RiotAPIAxiosEvent };