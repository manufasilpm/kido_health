import { ViewBookingModule } from './view-bookings.module';

describe('ViewBookingModule', () => {
    let dashboardModule: ViewBookingModule;

    beforeEach(() => {
        dashboardModule = new ViewBookingModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
