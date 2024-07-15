export default (applicantId: string) => ({
  applicantId,
  domainId: "",
  publicKey: "",
  domainApi: "https://api-dvsonline.idscan.net",
  callbacks: {
    submit(data: any) {
      console.log("submit " + JSON.stringify(data));
    },
    onValidate(data: any) {
      console.log("onValidate " + JSON.stringify(data));
    },
    onChange(data: any) {
      console.log("onChange " + JSON.stringify(data));
    },
    onCameraError(data: any){
      console.log("onCameraError " + JSON.stringify(data));
    },
    onReset(data: any) {
      console.log("onReset " + JSON.stringify(data));
    },
    onRetakeHook(data: any) {
      console.log("onRetakeHook " + JSON.stringify(data));
    },
    onError(data: any){
      console.log("onError " + JSON.stringify(data));
    },
    onReloaded() {
      console.log("onReloaded " );
    },
    onMounted(){
      console.log("onMounted ");
    },
  },
});
