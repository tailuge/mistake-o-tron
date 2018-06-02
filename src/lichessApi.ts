import * as oboe from 'oboe';

export class LichessApi {

  private url: string
  
  constructor(url) {
    this.url = url
  }
  
  games(user, items, itemCallback, completeCallback) {
		var all: any[] = [];
		oboe({
			method: "GET",
			url: this.url + "/games/export/" + user + "?max=" + items + "&analysed=true&evals=true&moves=true&opening=true",
			headers: { Accept: "application/x-ndjson" },
		}).node("!", function(data) {
			all.push(data);
			itemCallback(data);
		}).on("end", function({}) {
			completeCallback(all);
		}).fail(function(errorReport) {
			console.error(JSON.stringify(errorReport));
		});
	}
}