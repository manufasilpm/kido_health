import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PopupListComponent } from '../../child-list-popup/child-list-pop-up.component';
import { Child } from 'src/app/models/Child';
import { ChildService } from 'src/app/services/child/child.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive!: boolean;
    collapsed!: boolean;
    showMenu!: string;
    pushRightClass!: string;
    public childs:Array<Child>=[]

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService,private dialog:MatDialog, public router: Router,public childService:ChildService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        const userId: string | null = localStorage.getItem('user_id');

        this.childService.getChildrenByParentId(userId!).subscribe(
          (data) => {
            this.childs = data;
            console.log(data);
          },
          (error) => {
            console.error('Error getting children:', error);
          }
        );
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        // const dom: Element = document.querySelector('body');
        return true//dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    openPopup() {
        const dialogRef = this.dialog.open(PopupListComponent, {
          width: '300px',
          data: {
            title: 'CHOOSE YOUR CHILD',
           items: this.childs // Replace this with your list of items
          },
        });
    
        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed');
          // You can perform actions after the dialog is closed if needed
        });
      }
    
        viewChild() {
                this.router.navigate(["/parentViewChild"])
        }
    
        viewDashboard() {
            this.router.navigate(["/parentHome"])
          }
        viewBookings() {
            this.router.navigateByUrl("/parentHome/bookings")
        }
}
