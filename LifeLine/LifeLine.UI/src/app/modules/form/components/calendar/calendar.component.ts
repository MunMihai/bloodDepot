import { Component } from '@angular/core';
import { startOfToday, format, parse, eachDayOfInterval, endOfMonth, add, isToday, isSameMonth, isSameDay, isEqual, parseISO, getDay, startOfMonth, endOfWeek, startOfWeek } from 'date-fns';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  today = startOfToday();
  selectedDay = this.today;
  currentMonth = format(this.today, 'MMM-yyyy');
  firstDayCurrentMonth = parse(this.currentMonth, 'MMM-yyyy', new Date());

  days = eachDayOfInterval({
    start: startOfWeek(this.firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(this.firstDayCurrentMonth)),
  });

  colStartClasses: string[] = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  getClass(day: Date): string {
    const dayIdx = getDay(day);
    const dayIdxClass = this.colStartClasses[dayIdx];
    return `py-1.5 ${dayIdxClass}`;
  }

  previousMonth() {
    this.firstDayCurrentMonth = add(this.firstDayCurrentMonth, { months: -1 });
    this.currentMonth = format(this.firstDayCurrentMonth, 'MMM-yyyy');
    this.updateDays();
  }

  nextMonth() {
    this.firstDayCurrentMonth = add(this.firstDayCurrentMonth, { months: 1 });
    this.currentMonth = format(this.firstDayCurrentMonth, 'MMM-yyyy');
    this.updateDays();
  }

  private updateDays() {
    this.days = eachDayOfInterval({
      start: startOfWeek(this.firstDayCurrentMonth),
      end: endOfWeek(endOfMonth(this.firstDayCurrentMonth)),
    });
  }

  setSelectedDay( day: Date ) {
    this.selectedDay = day;
  }

  dayIsSelected(day: Date): boolean {
    return day === this.selectedDay;
  }

  dayIsToday(day: Date): boolean {
    return isToday(day);
  }

  dayIsSameMonth(day: Date): boolean {
    return isSameMonth(day, this.firstDayCurrentMonth);
  }

  formatDate(date: Date, formatString: string): string {
    return format(date, formatString);
  }

}
