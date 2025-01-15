export default defineNuxtPlugin(({ $i18n }) => {
  const i18n: any = $i18n;
  i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {};
});