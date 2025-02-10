import type { IUserInfo } from '$lib/types';
import { writable } from 'svelte/store';

export const isAuthenticated = writable(true);
export const accessToken = writable('');
export const idToken = writable('');
export const authError = writable<string>('');
export const userInfo = writable<IUserInfo | null>();
export const userDashboards = writable<{ id: number; viewer: string; name: string }[] | null>();

let initialized: boolean;

async function getLoginUser() {
	return {
		success: true,
		message: '',
		data: {
			activeDashboardId: 3,
			id: 3,
			name: 'Kwame Osafo',
			permissions: [
				'ReadUsers',
				'CreateUser',
				'UpdateUser',
				'DeleteUser',
				'ActivateUser',
				'DeactivateUser',
				'ReadRoles',
				'CreateRole',
				'UpdateRole',
				'DeleteRole',
				'ReadPermissions',
				'View Reports',
				'ReadDashboards',
				'CreateDashboard',
				'UpdateDashboard',
				'DeleteDashboard',
				'ActivateDashboard',
				'DeactivateDashboard',
				'View Dashboards',
				'Manage Dashboards',
				'View User Statuses',
				'Manage User Statuses',
				'View Regions',
				'CreateReport',
				'ReadReports',
				'UpdateReports',
				'DeleteReport'
			],
			role: 'Super Admin',
			roleId: 3,
			tags: [],
			username: 'rkosafo@outlook.com'
		}
	};
}

async function setTokenDetails(details: any) {
	if (!details) {
		isAuthenticated.set(false);
		accessToken.set('');
		idToken.set('');
		// userInfo.set(null);
		return true;
	}
	isAuthenticated.set(true);
	// accessToken.set(keycloak.token!);
	// idToken.set(keycloak.idToken!);
	// authError.set('');

	let parsedMeRet = await getLoginUser();
	// fix the others
	// const dashboards = await readMyDashboard();

	// if (dashboards.success) {
	// 	userDashboards.set(dashboards.data!);
	// }

	let extras: any;
	if (parsedMeRet.success) {

		extras = parsedMeRet.data;
	} else {
		extras = {};
		authError.set(parsedMeRet.message);
	}
	let dashboardInfo: any;

	userInfo.set({
		firstName: details.given_name,
		lastName: details.family_name,
		middleName: '',
		role: extras.role,
		roleId: extras.roleId,
		username: extras.username,
		fullName: extras.name,
		permissions: extras.permissions ?? [],
		activeDashboardId: extras.activeDashboardId,
		tags: extras.tags ?? []
	});
}

export function init() {
	// keycloak = new Keycloak({
	// 	url: 'https://auth.bitbluecloud.com',
	// 	realm: 'test',
	// 	clientId: 'test'
	// });
	// keycloak
	// 	.init({ onLoad: 'login-required', checkLoginIframe: false })
	// 	.then((authenticated: boolean) => {
	// 		if (authenticated) {
	// 			setTokenDetails(keycloak.idTokenParsed);
	// 		} else {
	// 			setTokenDetails(null);
	// 		}
	// 		initialized = true;
	// 	})
	// 	.catch((e: any) => {
	// 		initialized = false;
	// 	});
}

export function login() {
	// if (initialized) keycloak.login();
}

export function refreshToken() {
	// if (!initialized) return;
	// keycloak.updateToken(30).then((refreshed: boolean) => {
	// 	if (refreshed) setTokenDetails(keycloak.idTokenParsed);
	// });
}

export function logout() {
	// if (!initialized) return;
	// keycloak.logout();
}
