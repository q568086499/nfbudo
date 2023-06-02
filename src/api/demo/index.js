import api from '../index';
import { h5 } from '../baseUrl';
const header = {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};
export default {
    // 获取我的邀请信息,邀请码以及获得钱数
    getInviteInfo (data) {
        return api.post(h5 + 'user/invite/ajax_get_my_invite_info', data, header);
    },
    // 获取排行榜列表以及其他信息
    getRankList (data) {
        return api.get(h5 + 'user/invite/ajax_get_ranking_list', data, header);
    }
};
