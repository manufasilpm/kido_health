import { ViewBookingModule } from './view-reminders.module';

describe('DashboardModule', () => {
    let dashboardModule: ViewBookingModule;

    beforeEach(() => {
        dashboardModule = new ViewBookingModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
