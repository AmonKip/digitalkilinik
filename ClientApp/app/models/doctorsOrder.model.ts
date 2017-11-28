export class DoctorsOrder {
    constructor(
        public orderId?: number,
        public visitId?: number,
        public date?: string,
        public orderType?: string,
        public notes?: string) { }
}