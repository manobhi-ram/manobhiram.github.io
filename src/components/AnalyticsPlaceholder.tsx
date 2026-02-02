export default function AnalyticsPlaceholder() {
  return (
    <script
      data-analytics-placeholder
      dangerouslySetInnerHTML={{
        __html:
          "/* Analytics placeholder: add your provider snippet here. */",
      }}
    />
  );
}
