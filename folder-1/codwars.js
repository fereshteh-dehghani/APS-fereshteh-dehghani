function match(candidate, job) {
    // is this job a valid match for the candidate?
    
    if(candidate.minSalary===NaN || candidate.miSalary===null || candidate.MinSalary<120000){
      candidate.minsalary=120000;
    }
    if(candidate.minSalary===undefined ){
      throw "undefined property";
    }
    if(job.maxSalary==undefined){
      throw " undefined property";
    }
    candidate.minSalary = candidate.minSalary - candidate.minSalary*10/100;
    if(candidate.minSalary<=job.maxSalary){
      return true;
    }
   else if(candidate.minSalary>job.maxSalary){
      return false;
    }
  }