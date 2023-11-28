import { ViewVaccinesModule } from "./view-vaccines.module";

describe('DashboardModule', () => {
    let dashboardModule: ViewVaccinesModule;

    beforeEach(() => {
        dashboardModule = new ViewVaccinesModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
