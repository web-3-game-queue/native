import { Map } from "../Autogenerated/Backend";
import { BASE_API_URL } from "../Configuration";
import { fetch } from '@tauri-apps/api/http';

export abstract class MapAPI {
    public static readonly MAP_API_PATH = 'map';

    public static GetMaps = async (filterName?: string, maxPlayersCount?: number) => {
        const url = new URL(`${BASE_API_URL}/${this.MAP_API_PATH}/`);
        if (filterName) {
            url.searchParams.append('filterName', filterName);
        }
        if (maxPlayersCount) {
            url.searchParams.append('maxPlayersCount', maxPlayersCount.toString());
        }
        const result = await fetch<Map[]>(url.toString(), { method: 'GET' });
        const maps: Map[] = await result.data;
        return maps;
    }

    public static GetMap = async (mapId: number) => {
        const url = `${BASE_API_URL}/${this.MAP_API_PATH}/${mapId}`;
        const result = await fetch<Map>(url, { method: 'GET' });
        if (result.status == 400) {
            return null;
        }
        const map: Map = result.data;
        return map;
    }
}