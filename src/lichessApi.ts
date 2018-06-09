import * as oboe from 'oboe';

export class LichessApi {

  private readonly url: string
  
  constructor(url) {
    this.url = url
  }
  
  games(user, items, itemCallback, completeCallback) {
		var all: any[] = [];
		const fixedQueryParams = "&perfType=ultraBullet,bullet,blitz,rapid,classical" +
												     "&analysed=true&evals=true&moves=true&opening=true"
		oboe({
			method: "GET",
			url: this.url + "/games/export/" + user + "?max=" + items + fixedQueryParams,
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