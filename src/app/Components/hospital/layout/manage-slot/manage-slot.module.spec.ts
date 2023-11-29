import { ManageSlotModule } from './manage-slot.module';

describe('DashboardModule', () => {
    let dashboardModule: ManageSlotModule;

    beforeEach(() => {
        dashboardModule = new ManageSlotModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
