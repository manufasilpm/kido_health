import { ViewChildVaccinesModule } from "./view-child-vaccines.module";

describe('DashboardModule', () => {
    let dashboardModule: ViewChildVaccinesModule;

    beforeEach(() => {
        dashboardModule = new ViewChildVaccinesModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
