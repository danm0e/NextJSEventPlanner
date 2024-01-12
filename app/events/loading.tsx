const Loading = () => (
  <div className="grid gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 w-full pt-5">
    {[...Array(6)].map((_, idx) => (
      <div className="max-w-sm w-full mx-auto h-max" key={idx}>
        <div className="animate-pulse">
          <div className="space-y-3">
            <div className="h-48 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded col-span-2"></div>
              <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Loading;
