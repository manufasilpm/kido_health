import { ViewHospitalsModule } from "./view-hospitals.module";

describe('DashboardModule', () => {
    let dashboardModule: ViewHospitalsModule;

    beforeEach(() => {
        dashboardModule = new ViewHospitalsModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
