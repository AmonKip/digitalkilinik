export class AppUser {
    constructor(
        public userDetailsID?: number,
        public title?: string,
        public email?: string,
        public password?: string,
        public confirmPassword?: string,
        public firstName?: string,
        public lastName?: string,
        public idNumber?: string,
        public username?: string,
        public phoneNumber?: string,
        public gender?: string,
        public enabled?: number,
        public reason?: string,
        public biography?: string,
        public imageUrl?: string,
        public file?: File) { }
}
