import { Component } from '@angular/core';
import { StorageStatistic } from '../../models/storage-statistic';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-blood-chart',
  templateUrl: './blood-chart.component.html',
  styleUrls: ['./blood-chart.component.css']
})
export class BloodChartComponent {
  private statistic!: StorageStatistic;

  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    exportEnabled: true,
    title: {
      text: "Blood Donations"
    },
    subtitles: [{
      text: "Blood Type"
    }],
    data: [{
      type: "column",
      indexLabel: "{name}: {y} L",
      dataPoints: [] as { name: string, y: number }[]
    }]
  };

  constructor(private donationService: DonationService) {
    this.generateStatistics();
  }

  private generateStatistics(): void {
    this.donationService.generateStatistics()
      .subscribe((data: StorageStatistic) => {
        this.statistic = data;
        this.setChartOptionsData();
      });
  }

  private setChartOptionsData(): void {
    this.chartOptions.data[0].dataPoints = [
      { name: "A+", y: this.statistic.positiveA },
      { name: "A-", y: this.statistic.negativeA },
      { name: "B+", y: this.statistic.positiveB },
      { name: "B-", y: this.statistic.negativeB },
      { name: "AB+", y: this.statistic.positiveAB },
      { name: "AB-", y: this.statistic.negativeAB },
      { name: "O+", y: this.statistic.positiveO },
      { name: "O-", y: this.statistic.negativeO },
    ];
  }
}
